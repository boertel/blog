---
layout: post
title: Connect to postgres with python
permalink: python-postgres
tags:
---

Here is my snippet to quickly extract or manipulate data from a database in python:


```python
import os
import psycopg2

connection = psycopg2.connect(dsn=os.environ["DATABASE_URL"])

cursor = connection.cursor()

sql_query = "SELECT * FROM table;"

cursor.execute(sql_query)

results = cursor.fetchall()

for row in results:
    print(row)

cursor.close()
connection.close()
```
