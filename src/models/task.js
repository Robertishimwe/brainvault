// import mongoose from "mongoose";
// import emailService from "../services/email/email.service";
// // const emailService = require("../services/email/email.service")
// const Schema = mongoose.Schema;

// const taskSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//     min: 4,
//     max: 20,
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: false,
//   },
//   description: {
//     type: String,
//     required: true,
//     min: 10,
//   },
//   startDate: {
//     type: Date,
//   },
//   endDate: {
//     type: Date,
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'started', 'completed', 'overdued'],
//     default: 'pending'
//   },
//   createDate: {
//     type: "date",
//     default: Date.now(),
//   },
// });

// // Add a post update hook to send an email to the user of the updated task
// // taskSchema.post(['updateOne', 'updateMany'], async function(doc, next) {
// //     const updatedTask = await this.model.findOne(this.getFilter());
// //     const user = await mongoose.model("User").findById(updatedTask.user);
// //     const userEmail = user ? user.userEmail : '';

// //     console.log(">>>>>>>>>>>", updatedTask)
// //   const task = this;
// // //   const user = await mongoose.model('User').findById(task.user);
// // //   console.log(">>>>>>>>>>>", task.user)

// //   // Send an email to the user
// //   const email = await emailService(
// //     userEmail,
// //     'Your task has been updated',
// //     `Hi ${user.userName},

// //       Your task "${updatedTask.title}" has been updated.

// //       Please click on the following link to view the updated task:

// //       [Link to task]

// //       Thanks,
// //       The Team
// //     `,
// //   );

// //   console.log(email)
// // });


// const Task = mongoose.model("Task", taskSchema);

// export default Task; 



import mongoose from "mongoose";
import emailService from "../services/email/email.service";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  description: {
    type: String,
    required: true,
    min: 10,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['pending', 'started', 'completed', 'overdued'],
    default: 'pending'
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
});

// Add a post update hook to send an email to the user of the updated task
taskSchema.post(['updateOne', 'updateMany'], async function (result) {
  try {
    const updatedTasks = await this.model.find(this.getFilter());

    for (const updatedTask of updatedTasks) {
      const user = await mongoose.model("User").findById(updatedTask.user);
      const userEmail = user ? user.userEmail : '';

      // Send an email to the user
      const email = await emailService(
        userEmail,
        'Your task has been updated',
        `Hi ${user.userName},

          Your task "${updatedTask.title}" has been updated.

          Please click on the following link to view the updated task:

          [Link to task]

          Thanks,
          The Team
        `,
      );

      console.log(email);
    }
  } catch (error) {
    // Handle errors here, such as logging them or sending notifications.
    console.error("Error sending email:", error);
  }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
