import { Grid } from 'semantic-ui-react';
import ActivityList from './ActivityList';
// import ActivityDetails from '../details/ActivityDetail';
// import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityFilters from './ActivityFilters';

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  // const { loadActivities, activityRegistry } = activityStore;
  const { loadActivities } = activityStore;
  // const { selectedActivity, editMode } = activityStore;

  // useEffect(() => {
  //   if (activityRegistry.size === 0) {
  //     loadActivities();
  //   }
  // }, [activityRegistry.size, loadActivities]);

  useEffect(() => {
    loadActivities();
  }, [loadActivities]);

  if (activityStore.loadingInitial) {
    return <LoadingComponent content="Loading activities..." />;
  }
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        {/* {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />} */}
        <ActivityFilters />
      </Grid.Column>
    </Grid>
  );
});
