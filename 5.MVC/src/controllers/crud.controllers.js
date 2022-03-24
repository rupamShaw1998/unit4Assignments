const get = (model) => async (req, res) => {
    try {
        let id = req.params.id;
        const data = await model.find({evaluationId: id}).lean().exec;
        return res.status(200).send(data);
    }
    catch(err) {
        return res.status(500).send({ message: err.message} );
    }
};

const highest = (model) => async (req, res) => {
    try {
        let id = req.params.id;
        const data = await model
        .find({evaluationId: id})
        .populate({
            path: "studentID",
            select: [rollId, currentBatch],
            populate: "rollId",
            populate: "currentBatch"
        })
        .lean()
        .exec();

        data.sort((a,b) => b.marks-a.marks);
        return res.status(200).send(data[0]);
    }
    catch(err) {
        return res.status(500).send({ message: err.message});
    }
}

module.exports = { get, highest };