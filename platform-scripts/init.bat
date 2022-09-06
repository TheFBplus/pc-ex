@REM 此文件用于工程初始化，删除冗余文件，安装最新的依赖库

@echo off
if exist "..\package-lock.json" call del /q "..\package-lock.json"
if exist "../node_modules" call rd /s/q "../node_modules"
if exist "../bin" call rd /s/q "../bin"
if exist "../docs" call rd /s/q "../docs"
call ncu
call ncu -u
call npm install