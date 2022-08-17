import { Appointmentmonths } from "../helper/data";
import axios from 'axios';
import {createClient, createMicrophoneAndCameraTracks} from 'agora-rtc-react';
// const appId = "0beb0ea38d354084910f2336af295988";
// export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
// export const useClient = createClient(config);
// export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
// export const channelName = "livestream"


export const checkUserIsAdmin = currentUser => {
    if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
    const {userRoles} = currentUser;
    if (userRoles.includes('admin')) return true;

    return false;
}

export const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};
export const convertDate = (str) => {
    const array = str.split(' ');
    const index =  Appointmentmonths.findIndex((month) => month == array[0]);
    const dayArray = array[1].split(',').splice(0,1);
    const getDay = Number(dayArray[0]);
    return new Date(Number(array[2]),index,getDay);
}

