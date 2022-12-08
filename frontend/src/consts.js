import moment from 'moment'

export const LOGO_URL = "/jlr.jpeg";

export const TABLE_HEADERS_ASSETS = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'assetName', headerName: 'Name', width: 130 },
    { field: 'assetType', headerName: 'Asset Type', width: 130 },
];

export const TABLE_HEADERS_RESULTS = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'assetName', headerName: 'Asset Name', width: 130 },
    { field: 'testName', headerName: 'Test Name', width: 130 },
    { field: 'results', headerName: 'Results', width: 400 },
    { field: 'startTime', headerName: 'Start Time', width: 300, valueFormatter: params => moment(params?.value*1000).format("DD/MM/YYYY hh:mm A"),},
    { field: 'endTime', headerName: 'End Time', width: 300, valueFormatter: params => {
        if(params?.value === 0) {
            return "N/A"
        }
        return  moment(params?.value*1000).format("DD/MM/YYYY hh:mm A")
    }},
    { field: 'resultStatus', headerName: 'Status', width: 130 },
];

export const ADMIN_USER = {
    username: "admin",
    password: "admin"
}

export const MOCK_TESTS = [
    {id: 1, testName: "Test1"},
    {id: 2, testName: "Test2"},
    {id: 3, testName: "Test3"},
    {id: 4, testName: "Test4"},
    {id: 5, testName: "Test5"},
]

export const MOCK_ASSETS = [
    {id: 1, assetName: "Asset1", assetType: "Engine"},
    {id: 2, assetName: "Asset2", assetType: "Engine"},
    {id: 3, assetName: "Asset3", assetType: "Engine"},
    {id: 4, assetName: "Asset4", assetType: "Engine"},
    {id: 5, assetName: "Asset5", assetType: "Lights"},
]

export const MOCK_RESULTS = [
    {id: 1, testID: 1, assetID: 4, assetName: "Asset4", testName: "Test1", results:"Some string of results.", startTime:1660408590, endTime:1660408591, resultStatus: "completed" },
    {id: 2, testID: 2, assetID: 3, assetName: "Asset3", testName: "Test2", results:"N/A", startTime:1671408590, endTime: 0, resultStatus: "pending" },
    {id: 3, testID: 1, assetID: 4, assetName: "Asset4", testName: "Test1", results:"N/A", startTime:1671408590, endTime: 0, resultStatus: "pending" },
]