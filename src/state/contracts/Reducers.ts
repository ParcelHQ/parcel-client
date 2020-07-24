import { CREATE_ORGANIZATION } from './Constants';

export const ContractReducer = (state: any, action: any) => {
    switch (action.type) {
        case CREATE_ORGANIZATION:
            return [
                ...state,
                {
                    title: action.book.title,
                    author: action.book.author,
                },
            ];

        default:
            return state;
    }
};
