import React from 'react';
import Popover from '@material-ui/core/Popover';
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";





export const AppPopover=({ anchorEl, handleClose, open, addNewItem })=> {

    const [validateForms, setValidateForm]= React.useState({
            name: '',
            description: '',
    });

    const [error, setError] = React.useState({
            errorField1: false,
            errorField2: false
    });


    const validateName =(event)=>{
        setValidateForm({...validateForms,
            name: event.target.value});
        setError({
            ...error,
            errorField1: false
        })
    };

    const validateDescription =(event)=>{
        setValidateForm({...validateForms,
            description: event.target.value});
        setError({
            ...error,
            errorField2: false
        })
    };

    const pushNewItem = () => {
        let newItem=[{
            id: 5,
            name: validateForms.name,
            description: validateForms.description,
            checked: false
        }];
        addNewItem(newItem);
        setValidateForm({
            name: '',
            description: ''
        });
        handleClose();
    };

    const errorField1Control1=()=> {
        if (!validateForms.name){
            setError({
                ...error,
                errorField1: true
            });
        }
    };

    const errorField1Control2=()=> { debugger
        if (!validateForms.description){
            setError({
                ...error,
                errorField2: true
            });
        }
    };


    return (
        <div>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div style={{
                    width: '230px',
                    margin: '15px',
                }}>
                    <TextField
                        id="standard-read-only-input"
                        label='Заголовок'
                        placeholder='Введите заголовок'
                        margin='normal'
                        fullWidth={true}
                        variant='standard'
                        error={error.errorField1}
                        helperText={error.errorField1 ? '*заполните поле!' : ''}
                        onChange={validateName}
                        value={validateForms.name}
                        onBlur={errorField1Control1}

                    />
                    <TextField
                        id="standard-read-only-input"
                        label='Описание'
                        placeholder='Введите описание'
                        margin='normal'
                        fullWidth={true}
                        variant='standard'
                        error={error.errorField2}
                        helperText={error.errorField2 ? '*заполните поле!' : ''}
                        onChange={validateDescription}
                        value={validateForms.description}
                        onBlur={errorField1Control2}
                    />
                    <Button
                        color="secondary"
                        onClick={pushNewItem}
                        disabled={(!validateForms.name || !validateForms.description) ? true : false}
                    >
                        Добавить заметку
                    </Button>
                </div>
            </Popover>
        </div>
    );
}