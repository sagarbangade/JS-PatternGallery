@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

REM Specify the output file name
SET "OUTPUT_FILE=output.txt"

REM Create or clear the output file

REM Loop through all .js files in the current directory
for %%f in (*.js) do (
    echo %%~nxf >> %OUTPUT_FILE%
    
    REM Run the JavaScript file and capture the output
    node "%%f" >> %OUTPUT_FILE% 2>&1
    
    REM Add a separator for better readability
    echo -------------------------------------------------- >> %OUTPUT_FILE%
)

echo All files executed. Output saved in %OUTPUT_FILE%.
pause
