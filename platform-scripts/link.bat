@REM 此文件用于将本地工程与本地pc-ex库作关联，方便本地pc-ex库开发

@echo off
echo 请输入要关联的工程地址:
goto setProjectPath

:setProjectPath:
	set /p projectPath=工程地址:
	if "%projectPath%" == "" goto setProjectPath

call npm link
call cd "..\..\%projectPath%"
call npm link pc-ex