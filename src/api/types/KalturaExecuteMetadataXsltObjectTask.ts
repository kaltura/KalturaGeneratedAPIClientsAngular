
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaExecuteMetadataXsltObjectTaskArgs  extends KalturaObjectTaskArgs {
    metadataProfileId? : number;
	metadataObjectType? : KalturaMetadataObjectType;
	xslt? : string;
}


export class KalturaExecuteMetadataXsltObjectTask extends KalturaObjectTask {

    metadataProfileId : number;
	metadataObjectType : KalturaMetadataObjectType;
	xslt : string;

    constructor(data? : KalturaExecuteMetadataXsltObjectTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExecuteMetadataXsltObjectTask' },
				metadataProfileId : { type : 'n' },
				metadataObjectType : { type : 'es', subTypeConstructor : KalturaMetadataObjectType, subType : 'KalturaMetadataObjectType' },
				xslt : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExecuteMetadataXsltObjectTask',KalturaExecuteMetadataXsltObjectTask);
