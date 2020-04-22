// Requiring DB
const db = require('../models/review_model');

// Create Review
createReview = (req, res) => {

  // Create
  db.Review.create(req.body)
    .then((newReview) => {
      // Update the Employee's personal reviews with the new review
      return db.Employee.findOneAndUpdate({_id: req.params.id},
                    { $push: {personalReviews: newReview._id}},
                    { safe: true, upsert: true, new: true })
    })
    // If we were able to successfully update the employee, then send
    // the updated employee information back to the client
    .then(employee => res.json(employee))
    // Else if an error occurred, sent it to the client
    .catch(err => res.status(400).json(err));
};

updateReview = (req, res) => {
    // Find specific review with ID equal to req.params.id then update the description with req.body.descriptions
    db.Review.findOneAndUpdate({_id: req.params.id},
        { $set: {description: req.body.description}}, {new: true})
        // Then if review was successfully updated, send updated review back to client
        .then(review => res.json(review))
        // Else if an error occurs, send the error to the client
        .catch(err => res.status(400).json(err));
};

// Delete Review Method
deleteReview = (req, res) => {
    // Delete review that has ID equal to req.params.id
    db.Review.deleteOne({_id: req.params.reviewID})
        // If an error occurs, send error back to client
        .catch(err => res.status(422).json(err));

    // Delete Employee's association to the review
    db.Employee.findOneAndUpdate({_id: req.params.employeeID},
        {$pull: {personalReviews: req.params.reviewID}},
        {new: true}).then(response => res.json(response));
};

// Method to assign one employee to another employee's review.
assignToReview = (req, res) => {
    // Find Employee who's ID is equal to req.params.employeeID
    // and push req.params.reviewID into 'otherEmployeeReviews' array
    db.Employee.findOneAndUpdate({_id: req.params.employeeID},
        { $addToSet: { otherEmployeeReviews: req.params.reviewID }},
        { safe: true, upsert: true, new: true})
        // If employee was successfully updated with with new review,
        // return updated employee info to client
        .then(employee => res.json(employee))
        // Else if an error occurs, send error back to client
        .catch(err => res.status(422).json(err));
};

// Method for trading review id from employee for review
// body to display to client
getReview = (req, res) => {
  db.Review.findOne({_id: req.params.id})
      // If we successfully find a review, send it to the client.
      .then(review => res.json(review))
      // Else if and error occurs, send the err to the client
      .catch(err => res.status(400).json(err));
};

module.exports = {
    createReview,
    updateReview,
    deleteReview,
    assignToReview,
    getReview
};