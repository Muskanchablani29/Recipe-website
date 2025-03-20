// Action types as constants to avoid string duplication
export const AUTH_ACTIONS = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  DELETE_ACCOUNT: 'DELETE_ACCOUNT',
  UPDATE_PROFILE: 'UPDATE_PROFILE'
};

// Load user data from localStorage only once during initialization
const loadUserFromStorage = () => {
  try {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Failed to parse user data from localStorage:", error);
    return null;
  }
};



const savedUser = loadUserFromStorage();

const initialState = {
  user: savedUser,
  isLoggedIn: Boolean(savedUser),
  loading: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SIGNUP: {
      const user = action.payload;
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        console.error("Failed to save user to localStorage:", error);
      }
      return { 
        ...state, 
        user, 
        isLoggedIn: true,
        error: null 
      };
    }

    case AUTH_ACTIONS.LOGIN: {
      const { email, password } = action.payload;
      const storedUser = loadUserFromStorage();
      
      if (storedUser && storedUser.user === email && storedUser.password === password) {
        return { 
          ...state, 
          user: storedUser, 
          isLoggedIn: true,
          error: null 
        };
      }
      
      return { 
        ...state,
        error: "Invalid credentials" 
      };
    }

    case AUTH_ACTIONS.LOGOUT:
      // We keep the user in localStorage but update the state
      return { 
        ...state, 
        isLoggedIn: false, 
      };

    case AUTH_ACTIONS.DELETE_ACCOUNT:
      try {
        localStorage.removeItem("user");
      } catch (error) {
        console.error("Failed to remove user from localStorage:", error);
      }
      return { 
        ...state, 
        user: null, 
        isLoggedIn: false,
        error: null 
      };
      
    case AUTH_ACTIONS.UPDATE_PROFILE: {
      const updatedUser = { ...state.user, ...action.payload };
      try {
        localStorage.setItem("user", JSON.stringify(updatedUser));
      } catch (error) {
        console.error("Failed to update user in localStorage:", error);
      }
      return {
        ...state,
        user: updatedUser,
        error: null
      };
    }

    default:
      return state;
  }
};

export default authReducer;

// Action creators
export const signup = (user) => ({ 
  type: AUTH_ACTIONS.SIGNUP, 
  payload: user 
});

export const login = (credentials) => ({ 
  type: AUTH_ACTIONS.LOGIN, 
  payload: credentials 
});

export const logout = () => ({ 
  type: AUTH_ACTIONS.LOGOUT 
});

export const deleteAccount = () => ({ 
  type: AUTH_ACTIONS.DELETE_ACCOUNT 
});

export const updateProfile = (userData) => ({
  type: AUTH_ACTIONS.UPDATE_PROFILE,
  payload: userData
});
