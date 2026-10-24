import { create } from 'zustand';

interface IntakeState {
  step: number;
  serviceType: string;
  technology: string;
  name: string;
  email: string;
  description: string;
  setField: (field: keyof IntakeState, value: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetStore: () => void;
}

export const useIntakeStore = create<IntakeState>((set) => ({
  step: 1,
  serviceType: 'Mentoría 1 a 1',
  technology: '',
  name: '',
  email: '',
  description: '',
  setField: (field, value) => set({ [field]: value }),
  nextStep: () => set((state) => ({ step: Math.min(3, state.step + 1) })),
  prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
  resetStore: () => set({ step: 1, serviceType: 'Mentoría 1 a 1', technology: '', name: '', email: '', description: '' }),
}));