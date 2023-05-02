FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .
COPY start.sh .
RUN chmod +x start.sh
CMD ["./start.sh"]