import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';

export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelselectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
  submitting
}: {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelselectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean
}) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
          submitting={submitting}
        />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelselectActivity={cancelselectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
            createOrEdit={createOrEdit}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
