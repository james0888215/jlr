import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "../styles/popup.css";
import { MOCK_ASSETS, MOCK_TESTS } from "../consts"
import TextField from '@mui/material/TextField';
import dayjs from "dayjs";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


const Popup = (props) => {
    const { createTest, showModal, handleCloseModal } = props;
    const [test, setTest] = useState('');
    const [asset, setAsset] = useState('');
    const [time, setTime] = useState(dayjs(''));

    const handleTestChange = (event) => {
        setTest(event.target.value);
    };

    const handleAssetChange = (event) => {
        setAsset(event.target.value);
    };

    const handleCreateSubmitted = () => {
        if(test != "" && asset != "" && time != "") {
            createTest(asset, test, time)
            setTime("");
            setTest("");
            setAsset("");
        };
        
    }

    const getAssetItems = () => {
        return MOCK_ASSETS.map(a => {
            return (<MenuItem value={a.id}>{a.assetName}</MenuItem>);
        });
    }

    const getTestItems = () => {
        return MOCK_TESTS.map(t => {
            return (<MenuItem value={t.id}>{t.testName}</MenuItem>);
        });
    }

    return (
        <Modal open={showModal} onClose={handleCloseModal}>
            <Box>
                <div className="modal-box">
                    <div className="create-form-wrapper">
                            <Select
                                label="Test"
                                onChange={handleTestChange}
                                defaultValue={'Select Test'}
                            >
                                {getTestItems()}
                            </Select>
                            <Select
                                label="Asset"
                                onChange={handleAssetChange}
                                displayEmpty
                            >
                                
                                {getAssetItems()}
                            </Select>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="DateTimePicker"
                                    onChange={(newValue) => {
                                        setTime(newValue);
                                    }}
                                    value={time}
                                />
                            </LocalizationProvider>
                            <Button variant="contained" onClick={handleCreateSubmitted}>Create</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default Popup;