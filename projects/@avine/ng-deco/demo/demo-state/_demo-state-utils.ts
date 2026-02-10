import { DcDemoState } from './demo-state-types';

/**
 * Utility designed to help updating `dcDemoProp` from URL query param.
 *
 * @param demoState The state to update
 * @param command The command as unsafe string
 *
 * @example
 * ```ts
 * const demoState = {
 *   size: dcDemoProp(['small', 'medium', 'large]),
 *   color: dcDemoProp(['blue', 'green']),
 * };
 *
 * const command = '{ "size": "medium" }';
 *
 * _patchDemoStateWithUnsafeCommand(demoState, command);
 * ```
 */
export const _patchDemoStateWithUnsafeCommand = <T>(demoState: DcDemoState<T>, command: string) => {
  try {
    Object.entries(JSON.parse(command)).forEach(([prop, value]) => {
      const demoProp = demoState[prop as keyof T] as DcDemoState<T>[keyof T] | undefined;
      if (!demoProp) {
        console.error('_patchZDemoStateWithUnsafeCommand: invalid prop', prop);
        return;
      }
      if (!(demoProp.values as unknown[]).includes(value)) {
        console.error('_patchZDemoStateWithUnsafeCommand: invalid value', value);
        return;
      }

      demoProp.set(value as T[keyof T]); // The `prop` and `value` seems fine! Let's update the signal.
    });
  } catch {
    console.error('_patchZDemoStateWithUnsafeCommand: invalid command', command);
  }
};
