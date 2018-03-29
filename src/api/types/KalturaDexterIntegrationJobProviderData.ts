
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegrationJobProviderData, KalturaIntegrationJobProviderDataArgs } from './KalturaIntegrationJobProviderData';

export interface KalturaDexterIntegrationJobProviderDataArgs  extends KalturaIntegrationJobProviderDataArgs {
    metadataProfileId? : number;
	transcriptAssetId? : string;
	entryId? : string;
	voicebaseApiKey? : string;
	voicebaseApiPassword? : string;
}


export class KalturaDexterIntegrationJobProviderData extends KalturaIntegrationJobProviderData {

    metadataProfileId : number;
	transcriptAssetId : string;
	entryId : string;
	voicebaseApiKey : string;
	voicebaseApiPassword : string;

    constructor(data? : KalturaDexterIntegrationJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDexterIntegrationJobProviderData' },
				metadataProfileId : { type : 'n' },
				transcriptAssetId : { type : 's' },
				entryId : { type : 's' },
				voicebaseApiKey : { type : 's' },
				voicebaseApiPassword : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDexterIntegrationJobProviderData',KalturaDexterIntegrationJobProviderData);
