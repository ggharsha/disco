import * as MembershipApiUtil from '../util/memberships_api_util';

export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';
export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';

const receiveMembership = membership => ({
    type: RECEIVE_MEMBERSHIP,
    membership
});

const removeMembership = membershipId => ({
    type: REMOVE_MEMBERSHIP,
    membershipId
});

export const createMembership = membership => dispatch => (
    MembershipApiUtil.createMembership(membership)
    .then(membership => dispatch(receiveMembership(membership)))
);

export const deleteMembership = membershipId => dispatch => (
    MembershipApiUtil.deleteMembership(membershipId)
    .then(() => dispatch(removeMembership(membershipId)))
);