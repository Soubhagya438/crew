// Mock data for frontend-only operation

export const mockAuth = {
  // Accept specific credentials for demo
  login: async (credentials) => {
    // Reduced API delay for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Check credentials
    if (credentials.email === 'admin@gmail.com' && credentials.password === 'admin123') {
      return {
        success: true,
        token: 'mock-jwt-token-' + Date.now(),
        user: {
          id: 1,
          name: 'Admin User',
          email: credentials.email,
          role: 'admin',
          avatar: 'https://picsum.photos/seed/admin123/40/40.jpg'
        }
      };
    } else {
      throw new Error('Invalid email or password');
    }
  },

  logout: async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return { success: true };
  },

  getCurrentUser: async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return {
      id: 1,
      name: 'Admin User',
      email: 'admin@gmail.com',
      role: 'admin',
      avatar: 'https://picsum.photos/seed/admin123/40/40.jpg'
    };
  }
};

export const mockDashboard = {
  getStats: async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return {
      totalCrew: 248,
      activeVessels: 12,
      pendingAssignments: 7,
      totalDocuments: 1426,
      newCrewThisMonth: 15,
      expiringCertificates: 8,
      vesselsAtSea: 9,
      vesselsInPort: 3
    };
  },

  getRecentActivities: async () => {
    await new Promise(resolve => setTimeout(resolve, 150));
    return [
      {
        id: 1,
        time: '2 hours ago',
        description: 'New crew member assigned to vessel Ocean Pearl',
        type: 'assignment',
        icon: '👤'
      },
      {
        id: 2,
        time: '5 hours ago',
        description: 'Medical certificate updated for John Smith',
        type: 'document',
        icon: '📄'
      },
      {
        id: 3,
        time: '1 day ago',
        description: 'Vessel Sea Voyager departed from port',
        type: 'vessel',
        icon: '⛵'
      },
      {
        id: 4,
        time: '2 days ago',
        description: 'Safety inspection completed for Atlantic Star',
        type: 'inspection',
        icon: '✅'
      },
      {
        id: 5,
        time: '3 days ago',
        description: 'Contract renewal sent to 5 crew members',
        type: 'contract',
        icon: '📝'
      }
    ];
  },

  getUpcomingEvents: async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return [
      {
        id: 1,
        date: 'Mar 25',
        title: 'Crew training session',
        type: 'training',
        location: 'Training Center'
      },
      {
        id: 2,
        date: 'Mar 28',
        title: 'Vessel inspection - Atlantic Star',
        type: 'inspection',
        location: 'Port Authority'
      },
      {
        id: 3,
        date: 'Apr 02',
        title: 'Contract renewal meeting',
        type: 'meeting',
        location: 'Main Office'
      },
      {
        id: 4,
        date: 'Apr 05',
        title: 'Safety drill - Pacific Pearl',
        type: 'drill',
        location: 'Vessel'
      },
      {
        id: 5,
        date: 'Apr 08',
        title: 'Medical certificate renewals due',
        type: 'medical',
        location: 'Medical Center'
      }
    ];
  }
};

export const mockCrew = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 700));
    return [
      {
        id: 1,
        name: 'John Smith',
        position: 'Captain',
        vessel: 'Ocean Pearl',
        status: 'Active',
        email: 'john.smith@crewbridge.com',
        phone: '+1-555-0123',
        joinDate: '2020-03-15',
        certificates: 5,
        nextMedical: '2024-06-15'
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        position: 'Chief Engineer',
        vessel: 'Sea Voyager',
        status: 'Active',
        email: 'sarah.j@crewbridge.com',
        phone: '+1-555-0124',
        joinDate: '2019-08-22',
        certificates: 8,
        nextMedical: '2024-09-20'
      },
      {
        id: 3,
        name: 'Mike Wilson',
        position: 'First Mate',
        vessel: 'Atlantic Star',
        status: 'On Leave',
        email: 'mike.w@crewbridge.com',
        phone: '+1-555-0125',
        joinDate: '2021-01-10',
        certificates: 6,
        nextMedical: '2024-07-10'
      }
    ];
  }
};

export const mockVessels = {
  getAll: async () => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return [
      {
        id: 1,
        name: 'Ocean Pearl',
        type: 'Cargo Ship',
        status: 'At Sea',
        flag: 'Panama',
        tonnage: '45,000',
        crewCount: 24,
        location: 'Pacific Ocean',
        eta: '2024-03-28'
      },
      {
        id: 2,
        name: 'Sea Voyager',
        type: 'Container Ship',
        status: 'In Port',
        flag: 'Liberia',
        tonnage: '62,000',
        crewCount: 28,
        location: 'Singapore Port',
        eta: '2024-03-26'
      },
      {
        id: 3,
        name: 'Atlantic Star',
        type: 'Tanker',
        status: 'At Sea',
        flag: 'Marshall Islands',
        tonnage: '80,000',
        crewCount: 32,
        location: 'Atlantic Ocean',
        eta: '2024-04-01'
      }
    ];
  }
};

export default {
  auth: mockAuth,
  dashboard: mockDashboard,
  crew: mockCrew,
  vessels: mockVessels
};
