import jwt_decode from 'jwt-decode';

export const jwtDecode = accessToken => {
    return jwt_decode(accessToken)
}