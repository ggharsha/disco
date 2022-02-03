import * as MembershipApiUtil from '../util/memberships_api_util';

export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';
export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';

const receiveMembership = membership => ({
    type: RECEIVE_MEMBERSHIP,
    membership
});

const removeMembership = membership => ({
    type: REMOVE_MEMBERSHIP,
    membership
});

export const createMembership = membership => dispatch => (
    MembershipApiUtil.createMembership(membership)
    .then(membership => dispatch(receiveMembership(membership)))
);

export const deleteMembership = membership => dispatch => (
    MembershipApiUtil.deleteMembership(membership)
    .then(() => dispatch(removeMembership(membership)))
);