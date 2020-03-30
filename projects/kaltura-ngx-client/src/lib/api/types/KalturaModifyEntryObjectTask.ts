
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaModifyEntryObjectTaskArgs  extends KalturaObjectTaskArgs {
    inputMetadataProfileId? : number;
	inputMetadata? : KalturaKeyValue[];
	outputMetadataProfileId? : number;
	outputMetadata? : KalturaKeyValue[];
	inputUserId? : string;
	inputEntitledUsersEdit? : string;
	inputEntitledUsersPublish? : string;
	resetMediaRepurposingProcess? : boolean;
}


export class KalturaModifyEntryObjectTask extends KalturaObjectTask {

    inputMetadataProfileId : number;
	inputMetadata : KalturaKeyValue[];
	outputMetadataProfileId : number;
	outputMetadata : KalturaKeyValue[];
	inputUserId : string;
	inputEntitledUsersEdit : string;
	inputEntitledUsersPublish : string;
	resetMediaRepurposingProcess : boolean;

    constructor(data? : KalturaModifyEntryObjectTaskArgs)
    {
        super(data);
        if (typeof this.inputMetadata === 'undefined') this.inputMetadata = [];
		if (typeof this.outputMetadata === 'undefined') this.outputMetadata = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaModifyEntryObjectTask' },
				inputMetadataProfileId : { type : 'n' },
				inputMetadata : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				outputMetadataProfileId : { type : 'n' },
				outputMetadata : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				inputUserId : { type : 's' },
				inputEntitledUsersEdit : { type : 's' },
				inputEntitledUsersPublish : { type : 's' },
				resetMediaRepurposingProcess : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaModifyEntryObjectTask'] = KalturaModifyEntryObjectTask;