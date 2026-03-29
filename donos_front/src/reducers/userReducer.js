const initialState = {
    created: false,
    loggedin: false,
    current_user: null,
    users: {},
    errors: "",
    mypage: false,
    signin: false,
    transactions: false,
    transactionItems: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return {
                ...state,
                created: true,
                errors: [action.errors]
            };
        case "LOGGEDIN":
            return {
                ...state,
                current_user: [action.current_user],
                loggedin: true,
                errors: [action.errors]
            }
        case "GETUSERS":
            return {
                ...state,
                users: [action.users]
            };
        case "LOGGEDOUT":
            return {
              ...state,
              current_user: [action.current_user],
                logged: [action.logged],
              mypage: false
            };
        case "MYPAGE":
            return {
                ...state,
                mypage: [action.mypage]
            }
        case "CLOSEPAGE":
            return {
                ...state,
                mypage: action.mypage
            }
        case "SHOWSIGNIN":
            return {
                ...state,
                signin: action.signin
            }
        case "CLOSESIGNIN":
            return {
                ...state,
                signin: action.signin
            }
        case "TRANSACTIONS":
            return {
                ...state,
                transactions: action.transactions,
                transactionItems: action.transactionItems
            }
        default:
            return state;
    }
}
export default userReducer