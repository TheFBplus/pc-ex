@REM ���ļ����ڽ����ع����뱾��pc-ex�������������㱾��pc-ex�⿪��

@echo off
echo ������Ҫ�����Ĺ��̵�ַ:
goto setProjectPath

:setProjectPath:
	set /p projectPath=���̵�ַ:
	if "%projectPath%" == "" goto setProjectPath

call npm link
call cd "..\..\%projectPath%"
call npm link pc-ex