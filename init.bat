@echo off
if exist package-lock.json call del /q package-lock.json
if exist node_modules call rd /s/q node_modules
if exist bin call rd /s/q bin
if exist docs call rd /s/q docs
call npm install
pause