import { Controller, useFormContext } from "react-hook-form";

import { priorityOptions } from "@/constants/todo";

import { HStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@/components/ui/radio";

interface PriorityRadioGroupProps {
	name: string;
}

const PriorityRadioGroup = ({ name }: PriorityRadioGroupProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<RadioGroup
					name={field.name}
					value={field.value}
					onValueChange={({ value }) => field.onChange(value)}
					size="sm"
				>
					<HStack gap="3">
						{priorityOptions.map((option) => (
							<Radio
								key={option.value}
								value={option.value}
								inputProps={{ onBlur: field.onBlur }}
								cursor="pointer"
							>
								{option.label}
							</Radio>
						))}
					</HStack>
				</RadioGroup>
			)}
		/>
	);
};

export default PriorityRadioGroup;
