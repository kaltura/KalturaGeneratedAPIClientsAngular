
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseEntryCloneOptions } from './KalturaBaseEntryCloneOptions';
import { KalturaCloneComponentSelectorType } from './KalturaCloneComponentSelectorType';
import { KalturaBaseEntryCloneOptionItem, KalturaBaseEntryCloneOptionItemArgs } from './KalturaBaseEntryCloneOptionItem';

export interface KalturaBaseEntryCloneOptionComponentArgs  extends KalturaBaseEntryCloneOptionItemArgs {
    itemType? : KalturaBaseEntryCloneOptions;
	rule? : KalturaCloneComponentSelectorType;
}


export class KalturaBaseEntryCloneOptionComponent extends KalturaBaseEntryCloneOptionItem {

    itemType : KalturaBaseEntryCloneOptions;
	rule : KalturaCloneComponentSelectorType;

    constructor(data? : KalturaBaseEntryCloneOptionComponentArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseEntryCloneOptionComponent' },
				itemType : { type : 'es', subTypeConstructor : KalturaBaseEntryCloneOptions, subType : 'KalturaBaseEntryCloneOptions' },
				rule : { type : 'es', subTypeConstructor : KalturaCloneComponentSelectorType, subType : 'KalturaCloneComponentSelectorType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseEntryCloneOptionComponent',KalturaBaseEntryCloneOptionComponent);
