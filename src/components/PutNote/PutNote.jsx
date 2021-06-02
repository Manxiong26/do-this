import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function AddNote() {

    const dispatch = useDispatch();
    const history = useHistory();



    const [editMode, setEditMode] = useState(false)
    const [note, setNote] = useState('');

    const task = useSelector(store => store.note)
    console.log('CHECKING THE TASK NOTE!!!', task);

    let { id } = useParams();

    useEffect(() => {
        console.log('In useEffect param', id);
        dispatch({ type: 'FETCH_NOTE', payload: id })

    }, [])

    const handleEdit = () => {
        //Turn on edit Mode
        setEditMode(true)

        //Set values in state from our book reducer
        setNote(task.notes);
    }

    const saveEdit = () => {
        const updatedNote = {
            id: task.id, //user cant edit, getting form reducer
            notes: note, // Take the there from state, user may have changed
        }

        console.log('UPDATED NOTE INFO', updatedNote);
        dispatch({ type: 'UPDATE_NOTE', payload: updatedNote })

        // Turn off editMode
        setEditMode(false)

        //Navigate back, because this page wont refresh data from server
        //history.push('/taskList');


    }

    return (
        <>
            {/* {JSON.stringify(note)} */}

            {editMode === false &&
                <button onClick={handleEdit}>Edit</button>
            }

            { task && task.notes && editMode ?
                <div>
                    <label>Note:</label>
                    <input type="text" value={note}
                        onChange={(event) => setNote(event.target.value)} />
                </div>
                :
                <div>
                    <label>Note:</label>
                    <span>{task.notes}</span>
                </div>
            }
            {editMode &&
                <button onClick={saveEdit}>Save</button>
            }
        </>
    )
}

export default AddNote;