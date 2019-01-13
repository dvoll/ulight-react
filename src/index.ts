import BaseButton from './BaseButton';
import BaseFormLabel from './BaseFormLabel/BaseFormLabel';
import BaseHeading from './BaseHeading';
import BaseIcon from './BaseIcon';
import BaseInput from './BaseInput/BaseInput';
import BaseLabel from './BaseLabel';
import BaseTextArea from './BaseTextArea/BaseTextArea';
import BaseSelect from './MultiSelect/BaseSelect';
import ToggleButton from './ToggleButton/ToggleButton';
import ToggleElement from './ToggleButton/ToggleElement';
import { withUlightTheme } from './withUlightTheme';

const Select = withUlightTheme(BaseSelect);
const SelectOption = withUlightTheme(ToggleElement);
const TextArea = withUlightTheme(BaseTextArea);
const Input = withUlightTheme(BaseInput);

export {
    BaseButton,
    BaseLabel,
    BaseIcon,
    Input,
    BaseHeading,
    BaseFormLabel,
    Select,
    ToggleButton,
    SelectOption,
    withUlightTheme,
    TextArea
};

export * from './theme-context';
