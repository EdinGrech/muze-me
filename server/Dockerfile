FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .
RUN python3 manage.py migrate
EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]