import { CREATE_ORGANIZATION } from './Constants';

export const createOrganization = (value: any) => {
    return {
        type: CREATE_ORGANIZATION,
        value,
    };
};
