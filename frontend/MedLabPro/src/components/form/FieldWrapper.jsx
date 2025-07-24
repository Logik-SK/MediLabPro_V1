import AgeDobField from './fields/AgeDOBField';
import CurrencyField from './fields/CurrencyField';
import EmailField from './fields/EmailField';
import GenderField from './fields/GenderField';
import MultiSelectField from './fields/MultiSelectField';
import NameField from './fields/NameField';
import NumberField from './fields/NumberField';
import PhoneField from './fields/PhoneField';
import SelectField from './fields/SelectField';
import TextField from './fields/TextField';
import TimestampField from './fields/TimestampField';

const COMPONENT_MAP = {
  PhoneField,
  NameField,
  GenderField,
  EmailField,
  AgeDobField,
  TextField,
  NumberField,
  TimestampField,
  SelectField,
  MultiSelectField,
  CurrencyField,
 
};

const FieldWrapper = ({ config = [], formData, onChange }) => {
  return (
    <>
      {config.map((field) => {
        const Component = COMPONENT_MAP[field.type];
        if (!Component) return null;

        const dynamicProps = {
          ...field,
          key: field.name, // Ensure key exists
        };


        if (Array.isArray(field.options)) {
          dynamicProps.options = field.options;
        } else if (typeof field.options === 'object' && field.options !== null) {
          Object.assign(dynamicProps, field.options);
        }

        // Bind dynamic value and change handlers
        if (field.bindings) {
          Object.entries(field.bindings).forEach(([propName, dataKey]) => {
            if (propName.startsWith('on')) {
              dynamicProps[propName] = (e) => onChange(dataKey, e.target.value);
            } else {
              dynamicProps[propName] = formData[dataKey];
            }
          });
        }

        return (
          <div key={field.name} className="p-2">
            <Component {...dynamicProps} />
          </div>
        );
      })}
    </>
  );
};

export default FieldWrapper;
