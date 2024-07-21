export const en = {
  translation: {
    storybook: {
      form: {
        nickname: {
          label: 'Nickname',
          placeholder: 'SuperHero',
          required: 'Field is required',
          minLength: 'Field is too short',
          maxLength: 'Field is too long',
          pattern: 'Field must match correct pattern',
        },
        age: {
          label: 'Age',
          placeholder: '18',
          required: 'Field is required',
          min: 'Field must be higher',
          max: 'Field must be lower',
          positive: 'Field must be positive',
          negative: 'Field must be negative',
          integer: 'Field must be an integer',
        },
        rangeMin: {
          label: 'Range (min)',
          placeholder: '0',
          required: 'Field is required',
          min: 'Field must be higher',
          positive: 'Field must be positive',
        },
        rangeMax: {
          label: 'Range (max)',
          placeholder: '100',
          required: 'Field is required',
          min: 'Field must be lower',
          positive: 'Field must be positive',
        },
        invalidRange: 'Invalid range (max must be higher than min)',
      },
      actions: {
        primaryAction: {
          basic: {
            label: 'Save',
          },
          positive: {
            label: 'Create',
          },
          negative: {
            label: 'Delete',
          },
          tooltips: {
            label: 'Save',
            tooltip: 'Save changes',
            tooltip_disabled: 'No changes to save',
          },
        },
        secondaryAction: {
          basic: {
            label: 'Edit',
          },
          tooltips: {
            label: 'Edit',
            tooltip: 'Edit changes',
            tooltip_disabled: 'Edit is not available',
          },
        },
        cancelAction: {
          basic: {
            label: 'Cancel',
          },
          tooltips: {
            label: 'Cancel',
            tooltip: 'Cancel changes',
            tooltip_disabled: 'Cancel is not available',
          },
        },
      },
    },
  },
}
