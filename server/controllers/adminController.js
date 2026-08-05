import Booking from "../models/Booking.js"
import Show from "../models/Show.js";
import User from "../models/User.js";
import { dummyDashboardData, dummyBookingData, dummyShowsData } from "../configs/dummyData.js";


// API to check if user is admin
export const isAdmin = async (req, res) =>{
    res.json({success: true, isAdmin: true})
}

// API to get dashboard data
export const getDashboardData = async (req, res) =>{
    try {
        const bookings = await Booking.find({isPaid: true});
        const activeShows = await Show.find({showDateTime: {$gte: new Date()}}).populate('movie');

        const totalUser = await User.countDocuments();

        if (bookings.length === 0 && activeShows.length === 0) {
            return res.json({ success: true, dashboardData: dummyDashboardData });
        }

        const dashboardData = {
            totalBookings: bookings.length,
            totalRevenue: bookings.reduce((acc, booking)=> acc + booking.amount, 0),
            activeShows,
            totalUser
        }

        res.json({success: true, dashboardData})
    } catch (error) {
        console.error('getDashboardData error, returning dummy:', error.message);
        res.json({success: true, dashboardData: dummyDashboardData})
    }
}

// API to get all shows
export const getAllShows = async (req, res) =>{
    try {
        const shows = await Show.find({showDateTime: { $gte: new Date() }}).populate('movie').sort({ showDateTime: 1 })
        if (shows.length === 0) {
            return res.json({ success: true, shows: dummyDashboardData.activeShows });
        }
        res.json({success: true, shows})
    } catch (error) {
        console.error('getAllShows error:', error.message);
        res.json({success: true, shows: dummyDashboardData.activeShows })
    }
}

// API to get all bookings
export const getAllBookings = async (req, res) =>{
    try {
        const bookings = await Booking.find({}).populate('user').populate({
            path: "show",
            populate: {path: "movie"}
        }).sort({ createdAt: -1 })
        if (bookings.length === 0) {
            return res.json({ success: true, bookings: dummyBookingData });
        }
        res.json({success: true, bookings })
    } catch (error) {
        console.error('getAllBookings error:', error.message);
        res.json({success: true, bookings: dummyBookingData })
    }
}