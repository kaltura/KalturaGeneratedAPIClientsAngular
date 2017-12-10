
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaIntegrationJobProviderData, KalturaIntegrationJobProviderDataArgs } from './KalturaIntegrationJobProviderData';

export interface KalturaVoicebaseJobProviderDataArgs  extends KalturaIntegrationJobProviderDataArgs {
    entryId? : string;
	flavorAssetId? : string;
	transcriptId? : string;
	captionAssetFormats? : string;
	spokenLanguage? : KalturaLanguage;
	replaceMediaContent? : boolean;
}


export class KalturaVoicebaseJobProviderData extends KalturaIntegrationJobProviderData {

    entryId : string;
	flavorAssetId : string;
	transcriptId : string;
	captionAssetFormats : string;
	readonly apiKey : string;
	readonly apiPassword : string;
	spokenLanguage : KalturaLanguage;
	readonly fileLocation : string;
	replaceMediaContent : boolean;
	readonly additionalParameters : string;

    constructor(data? : KalturaVoicebaseJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVoicebaseJobProviderData' },
				entryId : { type : 's' },
				flavorAssetId : { type : 's' },
				transcriptId : { type : 's' },
				captionAssetFormats : { type : 's' },
				apiKey : { type : 's', readOnly : true },
				apiPassword : { type : 's', readOnly : true },
				spokenLanguage : { type : 'es', subTypeConstructor : KalturaLanguage, subType : 'KalturaLanguage' },
				fileLocation : { type : 's', readOnly : true },
				replaceMediaContent : { type : 'b' },
				additionalParameters : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVoicebaseJobProviderData',KalturaVoicebaseJobProviderData);
