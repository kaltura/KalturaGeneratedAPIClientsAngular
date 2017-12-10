
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEditorType } from './KalturaEditorType';
import { KalturaPlayableEntry, KalturaPlayableEntryArgs } from './KalturaPlayableEntry';

export interface KalturaMixEntryArgs  extends KalturaPlayableEntryArgs {
    editorType? : KalturaEditorType;
	dataContent? : string;
}


export class KalturaMixEntry extends KalturaPlayableEntry {

    readonly hasRealThumbnail : boolean;
	editorType : KalturaEditorType;
	dataContent : string;

    constructor(data? : KalturaMixEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMixEntry' },
				hasRealThumbnail : { type : 'b', readOnly : true },
				editorType : { type : 'en', subTypeConstructor : KalturaEditorType, subType : 'KalturaEditorType' },
				dataContent : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMixEntry',KalturaMixEntry);
