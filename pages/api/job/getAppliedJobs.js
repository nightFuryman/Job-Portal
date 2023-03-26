import ConnectDB from '@/DB/connectDB';
import ApplyJob from '@/models/ApplyJob';






export default async (req, res) => {
    await ConnectDB();

    const userId = req.query.id;

    try {
        const gettingAppliedJobs  = await ApplyJob.find({user : userId}).populate('user').populate('job');
        return res.status(200).json({ success: true, data : gettingAppliedJobs })
    } catch (error) {
        console.log('Error in getting applied  job (server) => ', error);
        return res.status(500).json({ success: false, message: "Something Went Wrong Please Retry Later !" })
    }
}