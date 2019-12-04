import React from 'react';
import Button from "@material-ui/core/es/Button/Button";
import cyan from "@material-ui/core/es/colors/cyan";
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import styles from './appButtons.module.css';


export const AppButtons =({ deleteChangeElements, itemsChecked, handleClick })=> {

    return (
        <div className={styles.buttons}>
            <div className={styles.btn}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        backgroundColor: cyan['700'],
                    }}
                    startIcon={<SpeakerNotesIcon />}
                    onClick={handleClick}
                >
                    <div className={styles.btnText}>
                        Новая заметка
                    </div>
                </Button>
            </div>
            <div className={styles.btn}>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={deleteChangeElements}
                    disabled={itemsChecked.length === 0}
                >
                    <div className={styles.btnText}>
                        Удалить заметку
                    </div>
                </Button>
            </div>
            <div className={styles.btn}>
                <Button
                    variant="contained"
                    startIcon={<SearchIcon />}
                >
                    <div className={styles.btnText}>
                        Искать в Google
                    </div>
                </Button>
            </div>
        </div>
    );
};