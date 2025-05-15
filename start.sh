#!/bin/bash

# Iniciar Backend
echo "Iniciando Backend..."
cd backend
./mvnw spring-boot:run &
BACKEND_PID=$!
cd ..

# Iniciar Frontend
echo "Iniciando Frontend..."
cd frontend
npm install
npm run dev &
FRONTEND_PID=$!
cd ..

echo "Backend PID: $BACKEND_PID"
echo "Frontend PID: $FRONTEND_PID"

# Esperar a que los procesos terminen
wait $BACKEND_PID $FRONTEND_PID
