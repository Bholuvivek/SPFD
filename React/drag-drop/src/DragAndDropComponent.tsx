import { Card, CardContent, Grid, Typography, Paper } from '@mui/material';
import React, { useState } from 'react';
import { DragAndDropComponentProps, todos, Status } from './data';

const DragAndDropComponent: React.FC = () => {
  const [tasks, setTasks] = useState<DragAndDropComponentProps[]>(todos);
  const [dropIndicator, setDropIndicator] = useState<string | null>(null);

  const updateTask = (taskData: DragAndDropComponentProps) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) => (item.id === taskData.id ? taskData : item))
    );
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: string
  ) => {
    e.dataTransfer.setData("text/plain", taskId.toString());
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.clearData();
    setDropIndicator(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");

    const task = tasks.find((task) => task.id === +taskId);

    if (task) {
      task.status = status;
      updateTask(task);
      setDropIndicator(null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDropIndicator(e.currentTarget.id);
  };

  const renderTasks = (status: string) => {
    console.log('this is the task', tasks)
    return tasks
      .filter((task) => task.status === status)
      .map((task) => (
        <Card
          key={task.id}
          draggable
          onDragStart={(e) => handleDragStart(e, task.id.toString())}
          onDragEnd={handleDragEnd}
          sx={{
            bgcolor: dropIndicator === status ? "lightblue" : "white",
            mb: 2,
            width: '100%',
          }}
        >
          <CardContent >
            <Typography variant="h6" color="warning">{task.title}hiii</Typography>
            <Typography variant="body2" color="textSecondary">{task.description}</Typography>
          </CardContent>
        </Card>
      ));
  };

  return (
    <Grid container spacing={2}>
     
      <Grid size={{sm:4}}>
        <Paper
          id="NEW"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "NEW")}
          sx={{
            height:'100vh',
            minHeight: '300px',
            padding: 2,
            borderRadius: 2,
            bgcolor: dropIndicator === "NEW" ? "lightblue" : "white",
          }}
        >
          <Typography variant="h6" sx={{textAlign:'center'}}>New</Typography>
          {renderTasks("NEW")}
        </Paper>
      </Grid>
      <Grid size={{sm:4}}>
        <Paper
          id="INPROGRESS"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "INPROGRESS")}
          sx={{
            height: '100vh',
            padding: 2,
            borderRadius: 2,
            bgcolor: dropIndicator === "INPROGRESS" ? "lightblue" : "white",
          }}
        >
          <Typography variant="h6" sx={{textAlign:"center"}}>In Progress</Typography>
          {renderTasks("INPROGRESS")}
        </Paper>
      </Grid>

      {/* COMPLETED Column */}
      <Grid size={{sm:4}}>
        <Paper
          id="COMPLETED"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "COMPLETED")}
          sx={{

            height: '100vh',
            padding: 2,
            borderRadius: 2,
            bgcolor: dropIndicator === "COMPLETED" ? "lightblue" : "white",
          }}
        >
          <Typography variant="h6" sx={{textAlign:'center'}}>Completed</Typography>
          {renderTasks("COMPLETED")}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DragAndDropComponent;
