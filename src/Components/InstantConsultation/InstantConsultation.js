import React, { useEffect, useState } from 'react';
import './InstantConsultation.css';
import { useSearchParams } from 'react-router-dom';
import FindDoctorSearchIC from './FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCardIC from './DoctorCardIC/DoctorCardIC';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const InstantConsultation = () => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isBooked, setIsBooked] = useState(false);

    const getDoctorsDetails = () => {
        console.log("Fetching doctors data...");
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
            .then(res => res.json())
            .then(data => {
                console.log("Doctors data fetched:", data);
                setDoctors(data);

                if (searchParams.get('speciality')) {
                    const speciality = searchParams.get('speciality').toLowerCase();
                    const filtered = data.filter(doctor =>
                        doctor.speciality.toLowerCase() === speciality
                    );
                    setFilteredDoctors(filtered);
                    setIsSearched(true);
                } else {
                    setFilteredDoctors([]);
                    setIsSearched(false);
                }
            })
            .catch(err => console.error("Error fetching doctor data:", err));
    };

    const handleSearch = (searchText) => {
        if (searchText === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
        } else {
            const filtered = doctors.filter(
                (doctor) => doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredDoctors(filtered);
            setIsSearched(true);
        }
    };

    const handleBookNow = (doctor) => {
        setSelectedDoctor(doctor);
        setIsBooked(false);
    };

    const confirmBooking = () => {
        setIsBooked(true);
    };

    const cancelBooking = () => {
        setSelectedDoctor(null);
        setName('');
        setPhone('');
        setIsBooked(false);
    };

    useEffect(() => {
        getDoctorsDetails();
    }, [searchParams]);

    return (
        <center>
            <div className="searchpage-container">
                <FindDoctorSearchIC onSearch={handleSearch} />
                <div className="search-results-container">
                    {isSearched ? (
                        <center>
                            <h2>{filteredDoctors.length} doctors available {searchParams.get('location')}</h2>
                            <h3>Book appointments with minimal wait-time & verified doctor details</h3>
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map(doctor => (
                                    <div className="doctor-cards-container">
                                        {doctors.map((doctor, index) => (
                                        <DoctorCardIC key={index} {...doctor} />
                                        ))}
                                    </div>
                                ))
                            ) : (
                                <p>No doctors found.</p>
                            )}
                        </center>
                    ) : null}
                </div>
            </div>

            {selectedDoctor && (
    <Popup open={true} closeOnDocumentClick onClose={cancelBooking}>
        <div className="booking-popup">
            {!isBooked ? (
                <>
                    <img 
                        src={selectedDoctor.image || "/doctor_avatar.png"} 
                        alt={selectedDoctor.name} 
                        className="doctor-avatar"
                        onError={(e) => e.target.src = "/doctor_avatar.png"} 
                    />
                    <h2>{selectedDoctor.name}</h2>
                    <p>{selectedDoctor.speciality}</p>
                    <p>{selectedDoctor.experience} years experience</p>
                    <p>Ratings: <span className="rating-stars">★★★★★</span></p>

                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                    />
                    <button onClick={confirmBooking} className="button">Book Now</button>
                </>
            ) : (
                <>
                    <h3>Appointment Booked!</h3>
                    <p>Name: {name}</p>
                    <p>Phone Number: {phone}</p>
                    <button onClick={cancelBooking} className="button cancel-button">Cancel Appointment</button>
                </>
            )}
        </div>
    </Popup>
)}

        </center>
    );
};

export default InstantConsultation;
