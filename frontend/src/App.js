import { useState, useEffect } from "react";
import "./styles/App.css";
import moment from "moment";
import API, { getAssetName, getTestName } from "./utils";
import Header from "./components/header";
import Popup from "./components/popup";
import DataTable from "./components/table";
import Login from "./components/login";
import Button from "@mui/material/Button";
import {
  ADMIN_USER,
  TABLE_HEADERS_ASSETS,
  MOCK_RESULTS,
  MOCK_ASSETS,
  TABLE_HEADERS_RESULTS,
} from "./consts";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [assetSelected, setAssetSelected] = useState(false);
  const [assetSelectedID, setAssetSelectedID] = useState("");
  const [selectedResult, setSelectedResult] = useState([]);
  const [resultData, setResultData] = useState(MOCK_RESULTS);

  useEffect(() => {
    filterResults(assetSelectedID);
  }, [resultData]);

  const filterResults = (id) => {
    const filteredResults = resultData.filter((r) => {
      return id === r.assetID;
    });
    setSelectedResult(filteredResults);
  };

  const handleOnCellClick = (params) => {
    setAssetSelected(true);
    setAssetSelectedID(params.id);
    filterResults(params.id);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    if (
      event.target[0].value === ADMIN_USER.username &&
      event.target[1].value === ADMIN_USER.password
    ) {
      setLoggedIn(true);
      setLoginError("");
    }
  };

  const createTest = (asset, test, time) => {
    const resultCopy = [...resultData];

    const newTest = {
      id: Math.floor(Math.random() * 9000000 + 1),
      testID: test,
      assetID: asset,
      assetName: getAssetName(asset),
      testName: getTestName(test),
      results: "N/A",
      startTime: time.unix(),
      endTime: 0,
      resultStatus: "pending",
    };

    resultCopy.push(newTest);
    setResultData(resultCopy);
    handleCloseModal();
  };

  return (
    <>
      {!loggedIn && <Login loginSubmit={loginSubmit} loginError={loginError} />}
      {loggedIn && (
        <>
          <Header />
          <div className="button-wrapper">
            <Button onClick={handleOpenModal} variant="contained">
              Create Test
            </Button>
          </div>
          <h3 className="section-title">Assets</h3>
          <DataTable
            rows={MOCK_ASSETS}
            headers={TABLE_HEADERS_ASSETS}
            handleOnCellClick={handleOnCellClick}
          />
          <hr />
          <h3 className="section-title">Results</h3>
          {assetSelected && selectedResult && (
            <DataTable rows={selectedResult} headers={TABLE_HEADERS_RESULTS} />
          )}
          {!assetSelectedID && <div>No asset selected</div>}
          <Popup showModal={showModal} createTest={createTest} />
        </>
      )}
    </>
  );
};

export default App;
