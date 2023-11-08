import { UserDTO } from '../types/UserDTO';
import CallApi from './api';
import { APIID } from '../constants'



export const getPensionStatementByIdApi = (statementId: any) =>
    CallApi({
        url: `${APIID}/api/statement/${statementId}`,
        method: 'get',
    });


export const getMinerStatementByIdApi = (statementId: any) =>
    CallApi({
        url: `${APIID}/api/statement/GetMinerStatementById/${statementId}`,
        method: 'get',
    });

export const getSubsidyPensionByIdAPI = (statementId: any) =>
    CallApi({
        url: `${APIID}/api/Statement/GetSubsidyPensionById?StatementId=${statementId}`,
        method: 'get',
    });

