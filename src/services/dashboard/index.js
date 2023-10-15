// import Task from '../../models/task'; // Import your Task model

// const DashboardService = {
//   async getDashboardData() {
//     try {
//       // Calculate counts for different task statuses
//       const counts = {
//         totalTasks: await Task.countDocuments(),
//         pendingTasks: await Task.countDocuments({ status: 'pending' }),
//         startedTasks: await Task.countDocuments({ status: 'started' }),
//         completedTasks: await Task.countDocuments({ status: 'completed' }),
//         overduedTasks: await Task.countDocuments({ status: 'overdued' }),
//       };

//       // Calculate upcoming tasks
//       const today = new Date();
//       today.setHours(0, 0, 0, 0);
//       const tomorrow = new Date(today);
//       tomorrow.setDate(today.getDate() + 1);

//       const upcomingTasks = await Task.find({
//         $or: [
//           { startDate: tomorrow },
//           { endDate: tomorrow },
//           { endDate: { $gt: tomorrow } }, // Deadlines after tomorrow
//         ],
//       });

//       return { counts, upcomingTasks };
//     } catch (error) {
//       throw new Error('Unable to fetch dashboard data');
//     }
//   },
// };

// export default DashboardService;




























// import Task from '../../models/task';

// const DashboardService = {
//   async getDashboardData() {
//     try {
//       // Calculate counts for different task statuses
//       const counts = {
//         totalTasks: await Task.countDocuments(),
//         pendingTasks: await Task.countDocuments({ status: 'pending' }),
//         startedTasks: await Task.countDocuments({ status: 'started' }),
//         completedTasks: await Task.countDocuments({ status: 'completed' }),
//         overduedTasks: await Task.countDocuments({ status: 'overdued' }),
//       };

//       // Get the current date and reset the time to 00:00:00
//       const currentDate = new Date();
//       currentDate.setHours(0, 0, 0, 0);

//       // Calculate dates for tomorrow and one week from today
//       const tomorrow = new Date(currentDate);
//       tomorrow.setDate(currentDate.getDate() + 1);

//       const oneWeekFromToday = new Date(currentDate);
//       oneWeekFromToday.setDate(currentDate.getDate() + 7);

//       // Calculate upcoming tasks for today, tomorrow, and this week
//       const upcomingStartTasksToday = await Task.find({
//         startDate: currentDate,
//       });

//       const upcomingStartTasksTomorrow = await Task.find({
//         startDate: tomorrow,
//       });

//       const upcomingStartTasksThisWeek = await Task.find({
//         startDate: {
//           $gte: tomorrow,
//           $lte: oneWeekFromToday,
//         },
//       });

//       const upcomingDeadlineTasksToday = await Task.find({
//         endDate: currentDate,
//       });

//       const upcomingDeadlineTasksTomorrow = await Task.find({
//         endDate: tomorrow,
//       });

//       const upcomingDeadlineTasksThisWeek = await Task.find({
//         endDate: {
//           $gte: tomorrow,
//           $lte: oneWeekFromToday,
//         },
//       });

//       return {
//         counts,
//         upcomingTasks: {
//           today: {
//             startTasks: upcomingStartTasksToday,
//             deadlineTasks: upcomingDeadlineTasksToday,
//           },
//           tomorrow: {
//             startTasks: upcomingStartTasksTomorrow,
//             deadlineTasks: upcomingDeadlineTasksTomorrow,
//           },
//           thisWeek: {
//             startTasks: upcomingStartTasksThisWeek,
//             deadlineTasks: upcomingDeadlineTasksThisWeek,
//           },
//         },
//       };
//     } catch (error) {
//       throw new Error('Unable to fetch dashboard data');
//     }
//   },
// };

// export default DashboardService;















































// import Task from '../../models/task';

// const DashboardService = {
//   async getDashboardData() {
//     try {
//       // Calculate counts for different task statuses
//       const counts = {
//         totalTasks: await Task.countDocuments(),
//         pendingTasks: await Task.countDocuments({ status: 'pending' }),
//         startedTasks: await Task.countDocuments({ status: 'started' }),
//         completedTasks: await Task.countDocuments({ status: 'completed' }),
//         overduedTasks: await Task.countDocuments({ status: 'overdued' }),
//       };

//       // Get the current date and reset the time to 00:00:00
//       const currentDate = new Date();
//       currentDate.setHours(0, 0, 0, 0);

//       // Calculate dates for tomorrow and one week from today
//       const tomorrow = new Date(currentDate);
//       tomorrow.setDate(currentDate.getDate() + 1);

//       const oneWeekFromToday = new Date(currentDate);
//       oneWeekFromToday.setDate(currentDate.getDate() + 7);

//       // Calculate upcoming start tasks for today, tomorrow, and this week
//       const upcomingStartTasksToday = await Task.find({
//         startDate: { $gte: currentDate, $lt: tomorrow },
//         status: 'pending',
//       });

//       const upcomingStartTasksTomorrow = await Task.find({
//         startDate: { $gte: tomorrow, $lt: oneWeekFromToday },
//         status: 'pending',
//       });

//       const upcomingStartTasksThisWeek = await Task.find({
//         startDate: { $gte: currentDate, $lt: oneWeekFromToday },
//         status: 'pending',
//       });

//       // Calculate upcoming deadline tasks for today, tomorrow, and this week
//       const upcomingDeadlineTasksToday = await Task.find({
//         endDate: { $gte: currentDate, $lt: tomorrow },
//       });

//       const upcomingDeadlineTasksTomorrow = await Task.find({
//         endDate: { $gte: tomorrow, $lt: oneWeekFromToday },
//       });

//       const upcomingDeadlineTasksThisWeek = await Task.find({
//         endDate: { $gte: currentDate, $lt: oneWeekFromToday },
//       });

//       return {
//         counts,
//         upcomingTasks: {
//           today: {
//             startTasks: upcomingStartTasksToday,
//             deadlineTasks: upcomingDeadlineTasksToday,
//           },
//           tomorrow: {
//             startTasks: upcomingStartTasksTomorrow,
//             deadlineTasks: upcomingDeadlineTasksTomorrow,
//           },
//           thisWeek: {
//             startTasks: upcomingStartTasksThisWeek,
//             deadlineTasks: upcomingDeadlineTasksThisWeek,
//           },
//         },
//       };
//     } catch (error) {
//       throw new Error('Unable to fetch dashboard data');
//     }
//   },
// };

// export default DashboardService;








































import Task from '../../models/task';

const DashboardService = {
  async getDashboardData(userId) {
    try {
      // Calculate counts for different task statuses
      const counts = {
        totalTasks: await Task.countDocuments(),
        pendingTasks: await Task.countDocuments({ status: 'pending' }),
        startedTasks: await Task.countDocuments({ status: 'started' }),
        completedTasks: await Task.countDocuments({ status: 'completed' }),
        overduedTasks: await Task.countDocuments({ status: 'overdued' }),
      };

      // Get the current date and reset the time to 00:00:00
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      // Calculate dates for tomorrow and one week from today
      const tomorrow = new Date(currentDate);
      tomorrow.setDate(currentDate.getDate() + 1);

      const oneWeekFromToday = new Date(currentDate);
      oneWeekFromToday.setDate(currentDate.getDate() + 7);

      // Calculate upcoming start tasks for today, tomorrow, and this week
      const upcomingStartTasksToday = await Task.find({
        startDate: { $gte: currentDate, $lt: tomorrow },
        status: 'pending',
      });

      const upcomingStartTasksTomorrow = await Task.find({
        startDate: { $gte: tomorrow, $lt: oneWeekFromToday },
        status: 'pending',
      });

      const upcomingStartTasksThisWeek = await Task.find({
        startDate: { $gte: currentDate, $lt: oneWeekFromToday },
        status: 'pending',
      });

      // Calculate upcoming deadline tasks for today, tomorrow, and this week
      const upcomingDeadlineTasksToday = await Task.find({
        endDate: { $gte: currentDate, $lt: tomorrow },
      });

      const upcomingDeadlineTasksTomorrow = await Task.find({
        endDate: { $gte: tomorrow, $lt: oneWeekFromToday },
      });

      const upcomingDeadlineTasksThisWeek = await Task.find({
        endDate: { $gte: currentDate, $lt: oneWeekFromToday },
      });

      // Calculate task performance statistics
      const taskCompletionRate = (counts.completedTasks / counts.totalTasks) * 100;

      // Calculate average task completion time (if you have a 'completedDate' field)
      const completedTasks = await Task.find({ status: 'completed' });
      const taskCompletionTimes = completedTasks.map((task) => {
        return task.completedDate - task.startDate;
      });
      const avgTaskCompletionTime =
        taskCompletionTimes.reduce((acc, time) => acc + time, 0) / taskCompletionTimes.length;

      // Calculate time tracking statistics (if you have a 'startTime' and 'endTime' field)
      const timeTrackingTasks = await Task.find({
        startTime: { $exists: true },
        endTime: { $exists: true },
      });
      const totalTrackedTime = timeTrackingTasks.reduce((total, task) => {
        return total + (task.endTime - task.startTime);
      }, 0);

      return {
        counts,
        upcomingTasks: {
          today: {
            startTasks: upcomingStartTasksToday,
            deadlineTasks: upcomingDeadlineTasksToday,
          },
          tomorrow: {
            startTasks: upcomingStartTasksTomorrow,
            deadlineTasks: upcomingDeadlineTasksTomorrow,
          },
          thisWeek: {
            startTasks: upcomingStartTasksThisWeek,
            deadlineTasks: upcomingDeadlineTasksThisWeek,
          },
        },
        performanceAnalytics: {
          completionRate: taskCompletionRate,
          averageCompletionTime: avgTaskCompletionTime,
        },
        timeTracking: {
          totalTrackedTime: totalTrackedTime,
        },
      };
    } catch (error) {
      throw new Error('Unable to fetch dashboard data');
    }
  },
};

export default DashboardService;
