**Pedestrian Report Dashboard**

The pedestrian report is a dashboard concept designed for a transportation department. It will take in a survey for pedestrians to report issues such as a damaged sidewalk and display a map that can assign tasks to employees. To do this Esri Survey123 will be used and Esri Workforce will be used to display the map of assigned tasks. Esri Workforce allows users to filter based on assigned roles and feature attributes. All entries in the survey will be automatically added to the Workforce map as a feature layer with unassigned points. 

*Dashboard layout*

The dashboard will be a page with the Workforce app embedded as well as an 'Add survey' button that would allow transportation employees to add their own surveys when they are in the field and see any issues. The dashboard should automatically update when refreshed to add survey info to the Workforce map. 

*Webhook*

A webhook is used with Power Automate to update information whenever a survey is submitted. The process works where every new entry from Survey123 will be sent to a JSON file with the associated attributes. The JSON file can then be sent to a pipeline using ArcGIS Data Pipeline where there will be a workflow that uses Workforce API to add the attributes as a feature. 

*Database*

The schema of Workforce is explained here: 
https://doc.arcgis.com/en/workforce/android-phone/help/workforce-schema.htm#ESRI_SECTION1_EDB5E3592870494BAE5F829765C604FF.
The database will take this schema and build a CLI as an alternative way for employee admins to update and alter info on Workforce. The changes made will then be synced to display on workforce. 
