The pedestrian report is a dashboard concept designed for the county transportation department. Using the dashboard, employees could see notifications provided by pedestrians where action to pedestrain infrastructure is needed. The dashboard would use the ESRI Workforce and Survey123 APIs. With Survey123, pedestrians could submit photos where maintenance is needed, relating to four categories: sidewalk damage, sidewalk obstruction, dangerous pedestrian zone, and miscellaneous. (Sidewalk damage would be where part of the sidewalk is missing, sidewalk obstruction could be where a tree has fallen onto the sidewalk, dangerous pedestrian zones would be pedestrian areas that seem hazardous to walk and may require a signal light). In the geocollector lab we did in class, we already implemented a dashboard using Survey123, so that dashboard will be used as the example reports by pedestrians. The pedestrian report dashboard will take those data points from the survey and implement them in Workforce. The Workforce API provides a basemap similar to Survey123, but allows workers to input the status on projects, such as the maintenance of pedestrian areas. This pedestrian report dashboard will implement Workforce to display the statuts of pedestrian maintenance and allow workers to rank locations provided in Survey123 on a priority scale of low, medium, and high.
