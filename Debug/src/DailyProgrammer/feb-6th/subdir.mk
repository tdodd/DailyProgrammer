################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../src/DailyProgrammer/feb-6th/SpellingWithChemistry.cpp 

OBJS += \
./src/DailyProgrammer/feb-6th/SpellingWithChemistry.o 

CPP_DEPS += \
./src/DailyProgrammer/feb-6th/SpellingWithChemistry.d 


# Each subdirectory must supply rules for building sources it contributes
src/DailyProgrammer/feb-6th/%.o: ../src/DailyProgrammer/feb-6th/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


