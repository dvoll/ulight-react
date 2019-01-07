import BaseButton from './BaseButton';
import BaseIcon from './BaseIcon';
import BaseInput from './BaseInput/BaseInput';
import BaseLabel from './BaseLabel';
import BaseHeading from './BaseHeading';
import BaseFormLabel from './BaseFormLabel/BaseFormLabel';
import { withUlightTheme } from './withUlightTheme';
import BaseSelect from './MultiSelect/BaseSelect';
import ToggleButton from './ToggleButton/ToggleButton';
import ToggleElement from './ToggleButton/ToggleElement';

const Select = withUlightTheme(BaseSelect);
const SelectOption = withUlightTheme(ToggleElement);

export {
    BaseButton,
    BaseLabel,
    BaseIcon,
    BaseInput,
    BaseHeading,
    BaseFormLabel,
    Select,
    ToggleButton,
    SelectOption,
    withUlightTheme
};

export * from './theme-context';
