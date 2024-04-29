// import logo from './logo.svg';
import { Card, Stack, Button, Typography } from '@mui/material';
import './App.css';
import { DynamicInput } from './component';
import AddNewComponent from './component/AddNewComponent';
import React, { useState } from 'react';
function App() {
  const [components, setComponents] = React.useState([]);
  const [addEditModal, setAddEditModal] = React.useState({ open: false, data: {} });



  const handleChange = (index, value) => {
    const newComponents = [...components];
    newComponents[index] = { ...newComponents[index], value };
    setComponents(newComponents);
  };
  const handleEdit = (index, data) => {
    let newComponents = [...components];
    newComponents[index] = data;
    setComponents(newComponents);
    setAddEditModal({ open: false, data: {} });
  }
  const handleAdd = (data) => {
    const newComponents = [...components, data];
    setComponents(newComponents);
    setAddEditModal({ open: false, data: {} });
  }


  return (
    <div className="App">
      <Stack direction="row" justifyContent={'center'} spacing={2}>
        <Card sx={{ maxWidth: 445, bgcolor: '#f5f5f5', height: '50vh', boxShadow: 'none', p: 20 }}>
          <Stack direction="column" justifyContent={'center'} spacing={3} sx={{ width: '100%' }}>
            {components?.map((component, index) => (
              <Stack key={index} direction="row" justifyContent={'space-between'}>
                <DynamicInput key={index} placeholder={component?.placeholder} value={component?.value} errorMessage={component?.errorMessage}
                  customChangeFunction={(value) => handleChange(index, value)}
                  options={component?.options || ['10', '20']}
                  required={component?.required}

                  inputType={component?.inputType} label={component?.label} sx={{ width: '100%' }} {...component} />{' '}

                {/* to edit the component (Button)*/}
                <EditView data={component} handleEdit={d => handleEdit(index, d)} />
              </Stack>
            ))}
          </Stack>
          {/* to adding new component  */}
          <Button onClick={() => setAddEditModal({ open: true, data: {} })} sx={{ mt: 3 }} variant="contained" color='success'>
            Add New
          </Button>
        </Card>
      </Stack>
      {addEditModal?.open && (
        <AddNewComponent
          open={addEditModal?.open}
          handleClose={() => setAddEditModal({ open: false, data: {} })}
          data={addEditModal?.data}
          handleSubmit={(data) => handleAdd()}
        />
      )}
      {/* <Card sx={{ bgcolor: '#f5f5f5', height: '50vh', boxShadow: 'none', p: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack direction="column" justifyContent={'center'} spacing={3} sx={{ width: '50%' }} alignItems={'center'}>
          <Typography variant="h5">Dynamic Input Example---</Typography>
          <DynamicInput
            label={'Enter Your Name'}
            sx={{ width: '100%' }}
            label={'Enter Your Name'}
            error={true}
            errorMessage={'Enter Your Name'}
          />
          <DynamicInput
            label={'Enter Your Name'}
            inputType="select"
            sx={{ width: '100%' }}
            placeholder={'Enter Your Age'}
            label={'Age'}
          />
          <DynamicInput
            label={'Enter Your Name'}
            inputType="number"
            sx={{ width: '100%' }}
            placeholder={'Enter Your Number'}
          />
          <DynamicInput
            label={'Enter Your Name'}
            inputType="currency"
            sx={{ width: '100%' }}
            placeholder={'Enter Your Amount'}
            label={'Amount'}
          />
          <DynamicInput
            label={'Enter Your Name'}
            inputType="select"
            sx={{ width: '100%' }}
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
          />
          <DynamicInput
            label={'Enter Your Name'}
            inputType="radio"
            sx={{ width: '100%' }}
            label={'Terms and Conditions'}
            disabled
          />
          <DynamicInput
            label={'Enter Your Name'}
            inputType="checkbox"
            sx={{ width: '100%' }}
            label={'Terms and Conditions'}
          />
        </Stack>
      </Card> */}
    </div>
  );
}

export default App;

function EditView({ data, handleEdit }) {
  const [edit, setEdit] = useState(false)
  return (
    <>
      <Button onClick={() => setEdit(!edit)}>Edit</Button>
      {edit && <AddNewComponent
        open={edit}
        handleClose={() => setEdit(!edit)}
        data={data}
        handleSubmit={data => {
          setEdit(false)
          handleEdit(data)
        }}
      />
      }

    </>
  )
}
