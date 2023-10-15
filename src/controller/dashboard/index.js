import DashboardService from "../../services/dashboard";

class dashboardController {
  static mainDashboardHandler = async (req, res) => {
    try {
      const dashboardData = await DashboardService.getDashboardData();
      res.status(200).json(dashboardData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default dashboardController;
